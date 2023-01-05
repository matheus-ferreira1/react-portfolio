const FormacaoCard = ({ item }) => {
  const { course, institute, nivel, dateInit, dateEnd } = item;

  return (
    <article className="bg-neutral-100 p-6 rounded-sm  w-[310px] h-[180px]">
      <h6 className="uppercase text-sm font-normal text-neutral-600 flex justify-start items-center">
        <span className="mr-2 h-[4px] bg-yellow-500 w-6 " />
        {nivel}
      </h6>
      <h2 className="font-bold text-xl break-words mt-2 mb-4">{course}</h2>
      <h3 className="text-lg font-medium text-neutral-600 mb-2">{institute}</h3>
      <h5 className="text-md font-light text-neutral-700 text-right">
        {dateInit} &#8594; {dateEnd}
      </h5>
    </article>
  );
};

export default FormacaoCard;
