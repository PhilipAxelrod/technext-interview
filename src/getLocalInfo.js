export function meiliAddress() {
    let request = new XMLHttpRequest();
    request.open(
        'GET',
        `https://${location.host}/resources/addresses/meilisearch-address`,
        false)
    request.send();

    if (request.status === 200) {
        return request.responseText;
    } else {
        request.open(
            'GET',
            `https://${location.host}/technext-interview/resources/addresses/meilisearch-address`,
            false);
        request.send();

        return request.responseText;
    }
}

export function meiliPublicSearchKey() {
    let request = new XMLHttpRequest();
    request.open(
        'GET',
        `https://${location.host}/resources/authentication/meili-public-search-key`,
        false);
    request.send();

    // The Webstorm debug server doesn't start in the technext-interview directory
    // Thus, when using the Webstorm debug server, one must specify the technext-interview
    // directory when looking for resources
    if (request.status === 200) {
        return request.responseText;
    } else {
        request.open(
            'GET',
            `https://${location.host}/technext-interview/resources/authentication/meili-public-search-key`,
            false);
        request.send();

        return request.responseText;
    }
}