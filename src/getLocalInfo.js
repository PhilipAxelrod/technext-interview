export function meiliAddress() {
    let request = new XMLHttpRequest();
    request.open(
        'GET',
        `https://${location.host}/technext-interview/resources/addresses/meilisearch-address`,
        false);
    request.send();
    console.log(`status: ${request.status}, text: ${request.statusText}`);
    return request.responseText;
}

export function meiliPublicSearchKey() {
    let request = new XMLHttpRequest();
    request.open(
        'GET',
        `https://${location.host}/technext-interview/resources/authentication/meili-public-search-key`,
        false);
    request.send();
    console.log(`status: ${request.status}, text: ${request.statusText}`);
    return request.responseText;
}