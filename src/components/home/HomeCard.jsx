function HomeCard({ subtitle, content, position, img }) {
  return (
    <div class="flex basis-full flex-row flex-wrap gap-y-4 p-8">
      <div
        class={`basis-full place-self-center font-light sm:basis-1/2 sm:text-sm md:text-base ${position}`}
      >
        <h3 class="basis-full text-center text-4xl font-bold mb-6 text-stone-100">{subtitle}</h3>
        <p class='text-justify text-stone-400'>{content}</p>
      </div>
      <img
        src={img}
        class="sm:h-86 h-72 w-1/2 basis-full object-scale-down sm:basis-1/2 p-4"
      />
    </div>
  );
}

export default HomeCard;
