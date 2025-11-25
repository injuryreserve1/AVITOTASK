import type { Data } from "@/entities/ad/model/adType";
import Button from "@/shared/ui/Button/Button";
import cls from "./Pagination.module.css";
import type { SetURLSearchParams } from "react-router";

interface Props {
  setSearchParams: SetURLSearchParams;
  page: number;
  data: Data;
}

const Pagination = ({ setSearchParams, page, data }: Props) => {
  const totalPages = data?.pagination.totalPages || 1;

  const handleSetPage = (newPage: number) => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set("page", newPage.toString());
      return newSearchParams;
    });
  };

  const handleClickPrev = () => {
    handleSetPage(page - 1);
  };

  const handleClickNext = () => {
    handleSetPage(page + 1);
  };
  return (
    <div className={cls.Pagination}>
      <Button
        theme="bordered"
        disabled={page === 1}
        onClick={handleClickPrev}
        type="button"
      >
        &lt;
      </Button>
      <div className={cls.pageCounter}>
        {page}/{totalPages}
      </div>
      <Button
        theme="bordered"
        disabled={page == totalPages}
        onClick={handleClickNext}
        type="button"
      >
        &gt;
      </Button>
    </div>
  );
};

export default Pagination;
