/**
 * go to page from other
 * ```text
 * base/page -> base/other_page
 * ```
 * @param {string} path
 */
const gotos = (path) =>
    (document.location.href =
        document.location.href.replace(
            /\/([^\/]*)\/$/gm.exec(document.location.href)[0],
            ""
        ) + path);
