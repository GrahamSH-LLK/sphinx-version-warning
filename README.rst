|PyPI version| |Docs badge| |License|

modern-sphinx-version-warning
======================

``modern-sphinx-version-warning
`` is a Sphinx extension that shows a customizable
warning banner at the top of versioned documentation hosted on Read the Docs.
It uses the Read the Docs Addons data to compare the version being viewed with
the highest active semantic version.


Installation
------------

::

   pip install modern-sphinx-version-warning



Configuration
-------------

Add this extension in your ``conf.py`` file as:

.. code-block:: python

   extensions = [
       # ... other extensions here

       'versionwarning.extension',
   ]

The Read the Docs Addons API must also be enabled for the site. See the
`installation documentation`_ for the required meta tag and complete setup.

By default, the warning links to the highest active version whose slug can be
interpreted as SemVer_. Set ``versionwarning_stable_as_highest = True`` in
``conf.py`` to prefer Read the Docs' ``stable`` version instead.


Documentation
-------------

Check out the documentation for the original version at https://sphinx-version-warning.readthedocs.io/

.. _SemVer: https://semver.org/
.. _installation documentation: https://sphinx-version-warning.readthedocs.io/en/latest/installation.html


.. |PyPI version| image:: https://img.shields.io/pypi/v/modern-sphinx-version-warning.svg
   :target: https://pypi.org/project/modern-sphinx-version-warning
   :alt: Current PyPI version
.. |Docs badge| image:: https://readthedocs.org/projects/sphinx-version-warning/badge/?version=latest
   :target: https://sphinx-version-warning.readthedocs.io/en/latest/?badge=latest
   :alt: Documentation status
.. |License| image:: https://img.shields.io/github/license/grahamsh-llk/sphinx-version-warning.svg
   :target: LICENSE
   :alt: Repository license
