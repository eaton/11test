export default async function(eleventyConfig) {

  // Manually add the documents to global data
  eleventyConfig.addGlobalData('documents', [
    { "title": "page 1", "id": "page-1", "content": "this is the first data page." },
    { "title": "page 2", "id": "page-2", "content": "this is the second data page." },
    { "title": "page 3", "id": "page-3", "content": "this is the third data page." }
  ]);

  // Build a collection containing templates with an 'id' data property
  eleventyConfig.addCollection("test", () => []);
  
  // Define computed functions
  eleventyConfig.addGlobalData('eleventyComputed.permalink', computedPermalink);
}

const computedPermalink = function() {
  return( data ) => {
    //console.log(`Test collection contains ${data.collections.test?.length} items`);
    return `/${data.document.id}/`;
  }
}
