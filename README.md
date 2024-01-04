# Accessing a collection in a computed permalinks function fails

Short snippet of 11ty configuration to reproduce [collections vs computed permalinks](https://github.com/eaton/11test/tree/eleventy-3148) problems in 11ty 2.0 and 3.0-alpha.

The problem pops up when:

1. You use a global eleventyComputed permalink function
2. You access any collection using `data.collection.[whatever]` in the permalink function

The function never returns the permalink value, which is most obvious whne every paginated template immediately complains about permalink collision.
