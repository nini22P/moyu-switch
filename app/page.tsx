import Moyu from '../markdown/moyu.md';

export default function Home() {
  return (
    <div className='max-w-3xl m-auto my-8 p-4'>
      <div className="prose dark:prose-invert max-w-fit prose-hr:my-8 prose-ul:m-0 prose-li:m-0 prose-a:no-underline prose-a:hover:underline prose-a:text-red-500">
        <Moyu />
      </div>
    </div>
  );
}
