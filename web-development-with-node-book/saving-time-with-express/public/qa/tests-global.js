suite('Global Tests', function(){
    assert(document.title && document.title.match(/\S/)  && document.title.toUpperCase !== 'TODO');
})