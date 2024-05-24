export async function fetchSummaryData() {
    const response = await fetch('jsons/summary.json');
    const data = await response.json();
    return data.summary.map(item => ({
        title: item.title,
        value: item.value,
        duration: item.duration,
        year: item.year
    }));
}

export async function fetchProjectProgressSummary() {
    const response = await fetch('jsons/Project_Progress_Summary.json');
    const data = await response.json();
    return data.project_progress_summary.map(item => ({
        title: item.title,
        value: item.value,
        percentage: item.percentage
    }));
}

export async function fetchWhatsNew() {
    const response = await fetch('jsons/Whats_New.json');
    const data = await response.json();
    return data.what_new_items.map(item => ({
        message: item.message,
        created_by: item.created_by
    }));
}

export async function fetchLatestActivity() {
    const response = await fetch('jsons/Latest_Activity.json');
    const data = await response.json();
    return data.latest_activity.map(item => ({
        activity_type: item.activity_type,
        activity: item.activity,
        readmore_link: item.readmore_link
    }));
}

export async function fetchNewProducts() {
    const response = await fetch('jsons/New_Products.json');
    const data = await response.json();
    return data.new_products.map(product => ({
        name: product.name,
        product_code: product.product_code,
        customer: product.customer,
        status: product.status,
        rating: product.rating
    }));
}

