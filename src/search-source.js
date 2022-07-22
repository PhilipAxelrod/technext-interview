import {instantMeiliSearch} from "@meilisearch/instant-meilisearch";
import instantsearch from "instantsearch.js";
import {searchBox, hits, configure, hitsPerPage, pagination} from "instantsearch.js/es/widgets";
import {meiliAddress, meiliPublicSearchKey} from "./getLocalInfo";

const search = instantsearch({
    indexName: "patents",
    searchClient: instantMeiliSearch(
        meiliAddress(),
        meiliPublicSearchKey(),
        {
            finitePagination: true
        }
    )
})

search.addWidgets([
    searchBox({
        container: '#search-box'
    }),
    configure({
        hitsPerPage: 4
    }),
    hits({
        container: '#hits',
        templates: {
            item(hit) {
                return `
                    <div>
                        <h3>Id: ${hit.patent_id}</h3>
                        <p> 
                            ${instantsearch.highlight({ attribute: 'patent_text', hit })} 
                        </p>
                    </div>
                `
            }
        }
    }),
    pagination({
        container: "#pagination"
    })
])

search.start()