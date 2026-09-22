Welcome to sphinx-version-warning!
==================================

``sphinx-version-warning`` is a Sphinx extension that shows a customizable
warning banner at the top of versioned documentation hosted on Read the Docs.
By default, it compares the version being viewed with the highest active
version whose slug can be interpreted as SemVer_.


Online documentation:
    https://sphinx-version-warning.readthedocs.io/

Source code repository (and issue tracker):
    https://github.com/grahamsh-llk/sphinx-version-warning/

Badges:
    |PyPI version| |Docs badge| |License|

Why do I need this extension?
-----------------------------

You *probably* don't.

Read the Docs `implements this feature by itself`_, adding a banner for you in
old versions.

Although, comparing this extension with Read the Docs' core functionality,
``sphinx-version-warning`` allows the user to customize the banner's message,
style, and position beyond what the built-in Read the Docs feature supports.

The default settings behave similarly to the built-in Read the Docs feature.
See :doc:`configuration` for the available customization options.

.. note::

   This extension was inspired by `this comment`_ on the Read the Docs issue tracker,
   where some discussions about what was missing from Read the Docs' feature took place.


How does it work?
-----------------

When a page is visited, the extension listens for version information from the
`Read the Docs Addons API`_. It then loads the banner configuration generated
during the Sphinx build and compares the current version against the active
versions supplied by Read the Docs. If the current semantic version is older
than the highest active semantic version, a warning banner is inserted at the
top of the configured page container.

The version-selection behavior can optionally prefer Read the Docs' ``stable``
version. Custom messages can also replace the normal version comparison for
specific version slugs. See :doc:`configuration` for details.


.. toctree::
   :maxdepth: 1
   :caption: Contents

   installation
   configuration
   get-involved
   who-is-using-it
   releasing

.. toctree::
   :maxdepth: 1
   :caption: API Reference

   autoapi/versionwarning/index

.. _SemVer: https://semver.org/
.. _Read the Docs Addons API: https://docs.readthedocs.com/platform/stable/addons.html#custom-event-integration
.. _implements this feature by itself: https://docs.readthedocs.io/page/versions.html#version-warning
.. _this comment: https://github.com/readthedocs/readthedocs.org/issues/3481#issuecomment-378000845

.. |PyPI version| image:: https://img.shields.io/pypi/v/sphinx-version-warning.svg
   :target: https://pypi.org/project/sphinx-version-warning
   :alt: Current PyPI version
.. |Docs badge| image:: https://readthedocs.org/projects/sphinx-version-warning/badge/?version=latest
   :target: https://sphinx-version-warning.readthedocs.io/en/latest/?badge=latest
   :alt: Documentation status
.. |License| image:: https://img.shields.io/github/license/grahamsh-llk/sphinx-version-warning.svg
   :target: LICENSE
   :alt: Repository license
