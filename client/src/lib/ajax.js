import $ from 'jquery';

export default {
  getPhotos: (id, callback) => {
    $.get({
      url: `http://localhost:8888/api/photos/${id}`,
      success: data => callback(null, data),
      error: (err) => {
        callback(err);
      },
    });
  },
};
