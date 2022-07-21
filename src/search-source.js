import {instantMeiliSearch} from "@meilisearch/instant-meilisearch";
import instantsearch from "instantsearch.js";

import {searchBox, hits, configure, hitsPerPage} from "instantsearch.js/es/widgets";

const search = instantsearch({
    indexName: "patents",
    searchClient: instantMeiliSearch(
        "http://localhost:7700",
        "628d7d1c524e967c44c8c67c72db2ede011a93ab527e276cc4cee3dec5607c90"
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
    })
])

search.start()