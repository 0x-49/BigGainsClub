<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap | Big Gains Club Premium</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #333;
            max-width: 75em;
            margin: 0 auto;
            padding: 2em;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #eee;
            margin: 2em 0;
          }
          th, td {
            padding: 1em;
            text-align: left;
            border-bottom: 1px solid #eee;
          }
          th {
            background: #f5f5f5;
            font-weight: 600;
          }
          .url { width: 50%; }
          .lastmod, .changefreq, .priority { width: 15%; }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <p>This is the sitemap for Big Gains Club Premium, listing all publicly accessible pages.</p>
        <table>
          <tr>
            <th class="url">URL</th>
            <th class="lastmod">Last Modified</th>
            <th class="changefreq">Change Frequency</th>
            <th class="priority">Priority</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td class="url"><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
              <td class="lastmod"><xsl:value-of select="sitemap:lastmod"/></td>
              <td class="changefreq"><xsl:value-of select="sitemap:changefreq"/></td>
              <td class="priority"><xsl:value-of select="sitemap:priority"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>