import VideoCard from "./components/VideoCard";


const HomePage = () => {
    const vid = {
        id: '1',
        created_at: '2024-06-08T21:56:07.039403+00:00',
        video_url: 'https://placehold.co/320x180',
        user_id: 'peet_ko',
        title: 'video title',
        num_comments: 42,
    };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Welcome to the Educational Video Player</div>
        <VideoCard video={vid} />
    </main>
  );
}

export default HomePage;