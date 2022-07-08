class Youtube {
    constructor(key) {
        this.key = AIzaSyBS2YZE8ZLJd6Oo18NKJS3Am_QwV7EYy8s;
        this.getrequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }

    async mostPopular() {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBS2YZE8ZLJd6Oo18NKJS3Am_QwV7EYy8s`,
        this.getrequestOptions
        );
        const result = await response.json();
        return result.items;
        } 

    async search(query) {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBS2YZE8ZLJd6Oo18NKJS3Am_QwV7EYy8s`, 
        this.getrequestOptions
        );
        const result = await response.json();
        return result.items.map(item => ({...item,id:item.id.videoId}));
    }
}

export default Youtube;