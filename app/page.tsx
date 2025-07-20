import README from '../README.md';

export default function Home() {
  return (
    <div
     className='pl-4 pt-[60dvh] pr-4 pb-4 lg:pl-8 lg:pt-8 lg:pb-8 lg:pr-[40%] xl:pr-[45%]'
     style={{ background: 'url(./main_visual.webp) no-repeat fixed top right / cover' }}
    >
      <main className='p-8 bg-[#FFFFFFcc] overflow-hidden rounded border-2 border-red-300 shadow-2xl backdrop-blur-xs'>
        <div className="prose max-w-fit prose-hr:my-8 prose-ul:m-0 prose-li:m-0 prose-li:marker:text-gray-500 prose-a:no-underline prose-a:hover:underline prose-a:text-red-500">
          <README />
        </div>
      </main>
    </div>
  );
}
