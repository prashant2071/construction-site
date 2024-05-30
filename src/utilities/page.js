export const PageNumberFunc = (hellodata, perpage) => {
  let pageNumber = [];
  if (hellodata.length > 0) {
    console.log("the length of page is", hellodata.length);

    for (let i = 1; i <= Math.ceil(hellodata.length / perpage); i++) {
      pageNumber.push(i);
      // console.log("the i data",i);
    }
    return pageNumber;
  }

  console.log("the page number", pageNumber);
};
