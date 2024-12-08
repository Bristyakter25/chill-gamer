

const GameWatchList = () => {
    const { user } = useAuth(); // Assume user contains the logged-in user's details
  const [watchList, setWatchList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/watchlist/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setWatchList(data);
          } else {
            setError("No watch  List items found.");
          }
        })
        .catch((error) => {
          console.error("Error fetching watch List:", error);
          setError("Failed to fetch watch List.");
        })
        .finally(() => setLoading(false));
    }
  }, [user?.email]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-5">My Watchlist</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Game Title</th>
            <th className="border p-2">Cover</th>
            <th className="border p-2">Added Date</th>
          </tr>
        </thead>
        <tbody>
          {watchList.map((game) => (
            <tr key={game._id}>
              <td className="border p-2 text-center">{game.title}</td>
              <td className="border p-2 text-center">
                <img src={game.cover} alt={game.title} className="w-16 h-16 mx-auto" />
              </td>
              <td className="border p-2 text-center">{new Date(game.addedDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default GameWatchList;