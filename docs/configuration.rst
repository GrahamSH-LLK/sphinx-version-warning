Configuration
=============

Here is the list of configuration values you can change to control the banner.
You can customize these options in your ``conf.py`` file:

Version selection
-----------------

By default, the extension examines the active versions supplied by the Read
the Docs Addons API. Version slugs that can be interpreted as semantic versions
are compared, and a banner is shown when the current semantic version is older
than the highest one.

Slugs that cannot be interpreted as semantic versions, such as ``latest`` and
``stable``, are excluded from this comparison. You can provide a custom banner
for such a slug with :confval:`versionwarning_messages`.

.. confval:: versionwarning_stable_as_highest

   Description: Prefer the active Read the Docs ``stable`` version as the
   warning target. When ``stable`` is available, any current semantic-version
   slug other than ``stable`` links to it. If ``stable`` is unavailable, the
   extension falls back to the highest active semantic version.

   Default: ``False``

   Type: boolean

Banner customization
--------------------

.. confval:: versionwarning_admonition_type

   Description: Admonition node type used to render the banner. ``warning``, ``admonition``, ``tip`` or ``note``.

   Default: ``'warning'``

   Type: string

.. confval:: versionwarning_banner_title

   Description: Title used in the banner.

   Default: ``'Warning'``

   Type: string

.. confval:: versionwarning_default_message

   Description: Default message shown in the banner.

   Default: ``'You are not reading the most up to date version of this documentation. {newest} is the newest version.'``

   Type: string

.. confval:: versionwarning_messages

   Description: Mapping of version slugs to custom banner messages. A custom
   message is displayed without comparing the version against active versions.

   Default: ``{}``

   Type: dict

.. confval:: versionwarning_message_placeholder

   Description: Text to be replaced by the version number link from the message

   Default: ``'newest'``

   Type: string

.. confval:: versionwarning_project_version

   Description: Slug of the version for the current documentation.

   Default: ``READTHEDOCS_VERSION`` environment variable.

   Type: string

.. confval:: versionwarning_banner_html

   Description: HTML used for the displayed banner.

   Default:

   .. code:: html

      <div id="{id_div}" class="admonition {admonition_type}">
        <p class="first admonition-title">{banner_title}</p>
        <p class="last">
          {message}
        </p>
      </div>

   Type: string


.. confval:: versionwarning_banner_id_div

   Description: HTML element ID used for the injected banner ``<div>``.

   Default: ``version-warning-banner``

   Type: string

.. confval:: versionwarning_body_selector

   Description: CSS selector for the page container into which the banner is
   inserted as the first child.

   Default: ``div.body``

   Type: string
