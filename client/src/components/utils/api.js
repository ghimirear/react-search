import axios from "axios";
export default {
    getBooks : function (booksName){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q="+ booksName)
    },
    getDbBooks: function() {
        return axios.get("/api/books");
      },
      // Gets the post with the given id
      // getDbBooks: function(id) {
      //   return axios.get("/api/books/" + id);
      // },
      // // Deletes the post with the given id
      deleteDbBooks: function(id) {
        return axios.delete("/api/books/" + id);
      },
      // Saves a post to the database
      saveBook: function(postData) {
        return axios.post("/api/books", postData);
      }
}