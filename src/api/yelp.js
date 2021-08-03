import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer zjcf3wZkUYI5JBefvEMS-PFG-nvdDgk_73VHnxbm2W8SfB4THAGw1CAOQsXtoqBz7KbwZNymh025sKDE-1jQIhBHnxTbot2IxqWeNmNwljOiD09OGzGxcoRPVaIHYXYx'
    }
});