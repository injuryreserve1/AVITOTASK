import cls from "./ListPage.module.css";
import AdsList from "./AdsList/AdsList";
import Pagination from "./Pagination/Pagination";
import FilterAds from "./FilterAds/FilterAds";
import { useAdsQuery } from "@features/Ad";
import { useSearchParams } from "react-router";
import { useDebounce } from "@/shared/utils/Debounce/Debounce";
import { useMemo } from "react";

type Params = Record<string, string | string[]>;

const defaultParams: Params = {
  page: "1",
  minPrice: "1",
  maxPrice: "120000",
  categoryId: "",
  "status[]": ["approved", "rejected", "pending"],
  search: "",
  sortBy: "createdAt",
  sortOrder: "asc",
};

const ListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams(defaultParams);

  const pageParam = Number(searchParams.get("page"));
  const minPriceParam = searchParams.get("minPrice");
  const maxPriceParam = searchParams.get("maxPrice");
  const categoryIdParam = searchParams.get("categoryId");
  const statusParam = searchParams.getAll("status[]");
  const searchParam = searchParams.get("search");
  const sortByParam = searchParams.get("sortBy");
  const sortOrderParam = searchParams.get("sortOrder");

  const objParams: Params = useMemo(
    () => ({
      page: String(pageParam),
      minPrice: minPriceParam!,
      maxPrice: maxPriceParam!,
      categoryId: categoryIdParam!,
      "status[]": statusParam,
      search: searchParam!,
      sortBy: sortByParam!,
      sortOrder: sortOrderParam!,
    }),
    [
      pageParam,
      minPriceParam,
      maxPriceParam,
      categoryIdParam,
      statusParam,
      searchParam,
      sortByParam,
      sortOrderParam,
    ],
  );

  const debouncedParams = useDebounce(objParams, 500);

  const { data, isLoading } = useAdsQuery(debouncedParams);

  return (
    <div className={cls.ListPage}>
      <FilterAds
        objParams={objParams}
        setSearchParams={setSearchParams}
        defaultParams={defaultParams}
      />
      <AdsList data={data} isLoading={isLoading} />
      <Pagination
        setSearchParams={setSearchParams}
        data={data}
        page={pageParam}
      />
    </div>
  );
};

export default ListPage;
