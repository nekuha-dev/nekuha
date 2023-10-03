import { contacts } from "@/constants/contacts";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export function Footer() {
  const user = 1;
  const renderFormattedEmailUrl = (url: string) => {
    if (user) {
      return (
        <a className="text-xs" target="_blank" href={`mailto:${url}?subject=코네하츠 문의 / 신고?body=안녕하세요 코네하츠입니다.%0D%0A문의 또는 신고 내용을 자세히 적어주세요.%0D%0A`}>
          {`문의 / 신고 : ${url}`}
        </a>
      );
    }
  };
  
  return (
    <div className="flex flex-col w-screen p-2 justify-center items-center bg-white">
      <div className="flex flex-row">
        <Link href="">
          <ChevronLeftIcon className="w-7 h-7"/>
        </Link>
        <p>
          {"1"}
        </p>
        <Link href="">
          <ChevronRightIcon className="w-7 h-7"/>
        </Link>
      </div>
      <div className="text-xs">{renderFormattedEmailUrl(contacts.email)}</div>
    </div>
  );
}
