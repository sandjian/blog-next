import { PuffLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen" role="status" aria-label="Loading">
      <PuffLoader size={50} color="#36d7b7" />
    </div>
  );
}