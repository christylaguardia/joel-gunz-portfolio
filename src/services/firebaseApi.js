import { pagesRef } from './firebase';

export default {
  getPages() {
    const results = pagesRef.on('value', (snapshot) => {
      const rawData = snapshot.val();
      // return rawData;
      
      // convert to array
      const rawDataArray = Object.keys(rawData).map(p => {
        let page = rawData[p];
        page.path = `/${p}`;
        return page;
      });
      console.log('rawDataArray', rawDataArray);
      return rawDataArray;
    });

    return results;
  }
};