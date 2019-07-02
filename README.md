# EzProxy Link Generator

EzProxy Link Generator (ELG, in short) allows users to generate links using your Institution's EzProxy prefix and use these where needed.

It aims at simplifying the process needed by teachers for creating permalinks to access articles and databases from outside a library or a university building.

## Requirements

There are no real requirements except a server to host the files.

## Setting up the EzProxy Link Generator

Setting up the EzProxy Link Generator is very simple:

1. Open the file called "app.js" in a text editor.

2. Edit line 3 and replace `**INSERT_YOUR_EZPROXY_URL_HERE**` with your Institution's EzProxy URL and the right port.
Example:
`var ezProxy = "https://**INSERT_YOUR_EZPROXY_URL_HERE**/login?URL=";`
Becomes:
`var ezProxy = "https://ezproxy.someinstitution.com:2443/login?URL=";`
3. Save.
4. Upload the files to your server and point to index.html

*Note: `var ezProxy` can be any URL you would need to prefix. The ELG was, though, designed to be used with EzProxy.*

## EzProxy Link Generator in action

The ELG is currently (2019) used by [Leiden University Library](https://kerkuil.leidenuniv.nl/linkgenerator/) and [Utrecht University](https://proxy.library.uu.nl/public/proxylink.html).

## License

This ELG licensed under the MIT License:
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
