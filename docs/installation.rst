Installation
============

Install the package

.. tabs::

   .. tab:: from PyPI

      .. prompt:: bash

         pip install sphinx-version-warning

   .. tab:: from GitHub

      .. prompt:: bash

         pip install git+https://github.com/grahamsh-llk/sphinx-version-warning@master


Once you have the package installed,
you have to configure it on your Sphinx documentation.
To do this, add the extension to your Sphinx ``extensions`` setting in
``conf.py``.

.. code-block:: python

   # conf.py
   extensions = [
        # ... other extensions here
        'versionwarning.extension',
   ]

Enable the Read the Docs Addons API
-----------------------------------

The extension receives active-version information from the Read the Docs
Addons API. Enable the API by adding the following meta tag to every HTML page:

.. code-block:: html

   <meta name="readthedocs-addons-api-version" content="1" />

One way to do this in Sphinx is to create ``_templates/layout.html`` with:

.. code-block:: jinja

   {% extends "!layout.html" %}

   {% block extrahead %}
     {{ super() }}
     <meta name="readthedocs-addons-api-version" content="1" />
   {% endblock %}

Then make sure the template directory is configured in ``conf.py``:

.. code-block:: python

   templates_path = ['_templates']


After installing the package and adding the extension in the ``conf.py`` file,
build the documentation on Read the Docs. When an older semantic version is
visited, the banner points to the equivalent page in the highest active
semantic version.

In case you want to show a customized banner in a specific version,
