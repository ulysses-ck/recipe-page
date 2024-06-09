import Image from "next/image";
import imageOmellette from "../../public/image-omelette.jpeg";

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen bg-white text-black p-4 rounded-lg flex flex-col gap-4">
      <div>
        <Image
          src={imageOmellette}
          alt="omelette"
          className="w-full object-cover rounded-lg "
          width={1024}
          height={1024}
        />
      </div>

      <h1 className="text-3xl font-bold">Simple Omelette Recipe</h1>

      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>

      <div className="bg-[#fff7fc] rounded-lg p-4">
        <h3 className="text-[#6f2e49] font-bold">Preparation time</h3>
        <ul>
          <li className="list-disc list-inside">
            <span className="font-bold">Total:</span> Approximately 10 minutes
          </li>
          <li className="list-disc list-inside">
            <span className="font-bold">Preparation:</span> 5 minutes
          </li>
          <li className="list-disc list-inside">
            <span className="font-bold">Cooking:</span> 5 minutes
          </li>
        </ul>
      </div>

      <h2 className="text-2xl text-[hsl(14,45%,36%)]">Ingredients</h2>
      <ul>
        <li className="list-inside list-disc">2-3 large eggs</li>
        <li className="list-inside list-disc">Salt, to taste</li>
        <li className="list-inside list-disc">Pepper, to taste</li>
        <li className="list-inside list-disc">1 tablespoon of butter or oil</li>
        <li className="list-inside list-disc">
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>

      <h2 className="text-2xl text-[#7f4630]">Instructions</h2>
      <ol>
        <li className="list-inside list-decimal">
          <span className="font-bold">Beat the eggs:</span> In a bowl, beat the
          eggs with a pinch of salt and pepper until they are well mixed. You
          can add a tablespoon of water or milk for a fluffier texture.
        </li>
        <li className="list-inside list-decimal">
          <span className="font-bold">Heat the pan:</span> Place a non-stick
          frying pan over medium heat and add butter or oil.
        </li>

        <li className="list-inside list-decimal">
          <span className="font-bold">Cook the omelette:</span> Once the butter
          is melted and bubbling, pour in the eggs. Tilt the pan to ensure the
          eggs evenly coat the surface.
        </li>

        <li className="list-inside list-decimal">
          <span className="font-bold">Add fillings (optional):</span> When the
          eggs begin to set at the edges but are still slightly runny in the
          middle, sprinkle your chosen fillings over one half of the omelette.
        </li>

        <li className="list-inside list-decimal">
          <span className="font-bold">Fold and serve:</span> As the omelette
          continues to cook, carefully lift one edge and fold it over the
          fillings. Let it cook for another minute, then slide it onto a plate.
        </li>

        <li className="list-inside list-decimal">
          <span className="font-bold">Enjoy:</span> Serve hot, with additional
          salt and pepper if needed.
        </li>
      </ol>
      <div
        aria-roledescription="hr"
        className="w-full h-[1px] bg-gray-300"
      ></div>

      <h2 className="text-2xl text-[#7f4630]">Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>

      <div
        className="grid grid-cols-2 gap-y-[1px] bg-gray-300 [&>*:nth-child(even)]:font-bold [&>*:nth-child(even)]:text-[#664641]"
      >
        <span className="bg-white">Calories</span>
        <span className="bg-white">277kcal</span>
        <span className="bg-white">Carbs</span>
        <span className="bg-white">0g</span>
        <span className="bg-white">Protein</span>
        <span className="bg-white">20g</span>
        <span className="bg-white">Fat</span>
        <span className="bg-white">22g</span>
      </div>
    </main>
  );
}
