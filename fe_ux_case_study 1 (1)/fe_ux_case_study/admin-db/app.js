import { fetchSummaryData, fetchProjectProgressSummary, fetchWhatsNew, fetchLatestActivity, fetchNewProducts } from './fetchData.js';


const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            summaryData: [],
            projectProgressSummary: [],
            whatsNew: [],
            latestActivity: [],
            newProducts: [],
        };
    },
    async created() {
        this.summaryData = await fetchSummaryData();
        this.projectProgressSummary = await fetchProjectProgressSummary();
        this.whatsNew = await fetchWhatsNew();
        this.latestActivity = await fetchLatestActivity();
        this.newProducts = await fetchNewProducts();
    },
    methods: {
        getTextClass(title) {
            switch (title.toLowerCase()) {
                case 'impressions': return 'text-c-blue';
                case 'goal': return 'text-c-green';
                case 'impact': return 'text-c-yellow';
                default: return '';
            }
        },
        getIconClass(title) {
            switch (title.toLowerCase()) {
                case 'impressions': return 'fas fa-eye bg-c-blue';
                case 'goal': return 'fas fa-bullseye bg-c-green';
                case 'impact': return 'fas fa-hand-paper bg-c-yellow';
                default: return '';
            }
        },
        getProgressClass(percentage) {
            return parseFloat(percentage) >= 0 ? 'bg-c-green' : 'bg-c-red';
        },
        getProgressAttributes(title) {
            switch (title.toLowerCase()) {
                case 'published project':
                    return { color: 'bg-c-red', width: '25%' };
                case 'completed task':
                    return { color: 'bg-c-blue', width: '65%' };
                case 'successfull task':
                    return { color: 'bg-c-green', width: '85%' };
                case 'ongoing project':
                    return { color: 'bg-c-yellow', width: '45%' };
                default:
                    return { color: '', width: '' };
            }
        },
        getWhatsNewData(message) {
            switch (message.toLowerCase()) {
                case 'your manager posted.':
                    return { type: 'image', src: './template_files/avatar-4.jpg' };
                case 'you have 3 pending task.':
                    return { type: 'icon', class: 'feather icon-briefcase bg-c-red update-icon' };
                case 'new order received.':
                    return { type: 'icon', class: 'feather icon-check f-w-600 bg-c-green update-icon' };
                default:
                    return { type: 'icon', class: 'feather icon-user bg-c-blue update-icon' };
            }
        },
        getIconClassForActivityType(activityType) {
            switch (activityType.toLowerCase()) {
                case 'devlopment & update':
                    return 'b-primary update-icon ring';
                case 'showcases':
                    return 'b-primary update-icon ring';
                case 'miscellaneous':
                    return 'b-success update-icon ring';
                case 'your manager posted.':
                    return 'b-danger update-icon ring';
                default:
                    return 'b-primary update-icon ring';
            }
        },
        getLinkClassForActivityType(activityType) {
            switch (activityType.toLowerCase()) {
                case 'devlopment & update':
                    return 'text-c-blue';
                case 'showcases':
                    return 'text-c-blue';
                case 'miscellaneous':
                    return 'text-c-green';
                case 'your manager posted.':
                    return 'text-c-red';
                default:
                    return 'text-c-blue';
            }
        },
        getStatusClass(status) {
            return status.toLowerCase() === 'in stock' ? 'label label-success' : 'label label-danger';
        },
        getRatingStars(rating) {
            let stars = [];
            for (let i = 1; i <= 5; i++) {
                stars.push(i <= rating ? 'fa fa-star f-12 text-c-yellow' : 'fa fa-star f-12 text-default');
            }
            return stars;
        }
    }
});

app.mount('body');