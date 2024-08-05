import NewsList from "@/app/components/news-list";
import { getLatestNews } from "@/app/lib/news";

function LatestPage() {
    const latestNews = getLatestNews()
    return (  
        <>
            <h2>Latest Page</h2>
            <NewsList news={latestNews} />
        </>
    );
}

export default LatestPage;