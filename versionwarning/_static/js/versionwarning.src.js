import coerce from "semver/functions/coerce";
import gt from "semver/functions/gt";
import lt from "semver/functions/lt";
import valid from "semver/functions/valid";

/** Turn an HTML string into a DOM node (first child of a wrapper div). */
function htmlToElement(html) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html.trim();
  return wrapper.firstChild;
}

/** Normalise a version slug like "v2.1" or "stable-3" into a semver string, or null. */
function normalise(slug) {
  return valid(coerce(slug));
}

/**
 * Insert a fully custom banner defined in the config.
 */
function injectCustomWarningBanner(config) {
  console.debug("injectCustomWarningBanner");
  const banner = htmlToElement(config.banner.html);
  const container = document.querySelector(config.banner.body_selector);
  container.insertBefore(banner, container.firstChild);
}

/**
 * Insert the standard "you're reading an old version" banner, linking to the
 * same page under the newest version's slug.
 */
function injectVersionWarningBanner(runningVersion, highestVersion, config) {
  console.debug("injectVersionWarningBanner");

  const newPath = window.location.pathname.replace(
    runningVersion.slug,
    highestVersion.slug,
  );

  const banner = htmlToElement(config.banner.html);
  const link = banner.querySelector("a");
  link.setAttribute("href", newPath);
  link.textContent = highestVersion.slug;

  const container = document.querySelector(config.banner.body_selector);
  container.insertBefore(banner, container.firstChild);
}

/**
 * From a list of Read the Docs version objects, return the one whose slug is
 * the highest semver version. Slugs that can't be coerced to semver
 * (e.g. "latest", "stable") are ignored.
 */
function getHighestVersion(versions) {
  console.debug("getHighestVersion");
  let highest;
  versions.forEach((version) => {
    if (!normalise(version.slug)) return;
    if (!highest) {
      highest = version;
    } else if (
      normalise(highest.slug) &&
      gt(coerce(version.slug), coerce(highest.slug))
    ) {
      highest = version;
    }
  });
  return highest;
}

/**
 * Show a banner if the version being viewed is older than the newest one.
 */
function checkVersion(config, versions) {
  console.debug("checkVersion");
  const runningVersion = config.version;
  console.debug("Running version: " + runningVersion.slug);
  if (config.meta.stable_as_highest) {
    const highestVersion = versions.find((version) => version.slug == "stable");
    if (highestVersion && normalise(runningVersion.slug) && highestVersion?.slug !== runningVersion.slug) {
        injectVersionWarningBanner(runningVersion, highestVersion, config);
        return;
    }
  }
  const highestVersion = getHighestVersion(versions);

  if (
    normalise(runningVersion.slug) &&
    normalise(highestVersion?.slug) &&
    lt(coerce(runningVersion.slug), coerce(highestVersion.slug))
  ) {
    console.debug("Highest version: " + highestVersion.slug);
    injectVersionWarningBanner(runningVersion, highestVersion, config);
  }
}

/**
 * Entry point: locate this script's own URL, derive the sibling JSON config
 * path (js/versionwarning.js -> data/versionwarning-data.json), load it,
 * then either show a custom banner or run the version check.
 */
function init(event) {
  console.debug("init");
  const versions = event.detail.data().versions.active;

  let dataUrl = document
    .querySelector('script[src*="versionwarning"]')
    .getAttribute("src");
  dataUrl = dataUrl
    .replace("versionwarning.js", "versionwarning-data.json")
    .replace("js/", "data/");

  fetch(dataUrl)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((config) => {
      if (document.getElementById(config.banner.id_div)) {
        console.debug("There is already a banner added. No checking versions.");
      } else if (config.banner.custom) {
        injectCustomWarningBanner(config);
      } else {
        checkVersion(config, versions);
      }
    })
    .catch((err) => {
      console.error("Error loading versionwarning-data.json", err);
    });
}

document.addEventListener("readthedocs-addons-data-ready", init);
