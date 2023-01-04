import { useParams } from 'react-router-dom';

function ProductScreen() {
  /* Create a hook to get the slug info */
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
export default ProductScreen;
