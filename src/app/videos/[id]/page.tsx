export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    return <p>Video {id} Page</p>;
}