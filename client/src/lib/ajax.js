import $ from 'jquery';

export default {
  getPhotos: (id) => {
    $.get({
      url: `http://localhost:8888/api/photos/${id}`,
      success: (data) => {
        return data;
      },
      error: (err) => {
        console.log('Failed to retrieve photos due to: ', err);
      }
    });
  }
};

