/* eslint-disable @next/next/no-img-element */
import { ChevronRight } from "@mui/icons-material";
import { TextareaAutosize } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

export default function FreeOpenStep2(props) {
  const teamItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const [teamOptionsOpen, setTeamOptionsOpen] = useState(false);
  const [minAgeOptionsOpen, setMinAgeOptionsOpen] = useState(false);
  const [maxAgeOptionsOpen, setMaxAgeOptionsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("click", () => {
      setTeamOptionsOpen(false);
      setMinAgeOptionsOpen(false);
      setMaxAgeOptionsOpen(false);
    });
  });

  return (
    <div className="px-5">
      <div className="flex-col space-y-8">
        <div>
          <div className="mb-3 text-sm font-medium textGray2">참여자</div>
          <div className="grid grid-cols-4 gap-3 mb-3 font-normal items-center">
            <div
              className="relative"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();

                setMinAgeOptionsOpen(false);
                setMaxAgeOptionsOpen(false);
              }}
            >
              <div className="border border-gary3 rounded-md py-1.5 text-center" onClick={() => setTeamOptionsOpen(true)}>
                <span className={`text-sm font-normal ${props.communityCreateDto.memberMaxCount == 0 ? "textGray4" : ""} `}>
                  {props.communityCreateDto.memberMaxCount == 0 ? "팀 수" : `${props.communityCreateDto.memberMaxCount}팀`}
                </span>
                <ChevronRight className="rotate-90" />
              </div>
              {teamOptionsOpen ? (
                <div className="z-50 absolute translate-y-full bottom-0 px-5 py-2 border bg-white rounded-md duration-100 w-full text-center h-40 overflow-scroll scrollbar-hide">
                  {teamItems.map((_teamItem) => (
                    <p
                      key={_teamItem}
                      onClick={() => {
                        props.setCommunityCreateDto({ ...props.communityCreateDto, memberMaxCount: _teamItem });
                        setTeamOptionsOpen(false);
                      }}
                    >
                      {_teamItem}
                    </p>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div
              className={`border rounded-md font-normal text-sm py-2 text-center ${
                props.communityCreateDto.condition == 0 ? "border-orange5 textOrange5" : "border-gary3 textGray2"
              }`}
              onClick={() => {
                props.setCommunityCreateDto({ ...props.communityCreateDto, condition: 0 });
              }}
            >
              아이랑
            </div>
            <div
              className={`border rounded-md font-normal text-sm py-2 text-center ${
                props.communityCreateDto.condition == 1 ? "border-orange5 textOrange5" : "border-gary3 textGray2"
              }`}
              onClick={() => {
                props.setCommunityCreateDto({ ...props.communityCreateDto, condition: 1 });
              }}
            >
              엄마만
            </div>
            <div
              className={`border rounded-md font-normal text-sm py-2 text-center ${
                props.communityCreateDto.condition == 2 ? "border-orange5 textOrange5" : "border-gary3 textGray2"
              }`}
              onClick={() => {
                props.setCommunityCreateDto({ ...props.communityCreateDto, condition: 2 });
              }}
            >
              아빠만
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3 text-sm font-medium textGray2">
            참여자의 아이 연령
            <span className="textGray4"></span>
          </div>
          <div className="flex">
            <div
              className="relative"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                setTeamOptionsOpen(false);
                setMaxAgeOptionsOpen(false);
              }}
            >
              <div className="w-28 border border-gary3 rounded-md p-2 text-center" onClick={() => setMinAgeOptionsOpen(true)}>
                <span className={`text-sm font-normal ${props.communityCreateDto.minAge == null ? "textGray4 " : ""}`}>
                  {props.communityCreateDto.minAge == null ? "최소 나이" : `${props.communityCreateDto.minAge} 세`}
                </span>
                <ChevronRight className="rotate-90" />
              </div>
              {minAgeOptionsOpen ? (
                <div className="z-50 absolute translate-y-full bottom-0 px-5 py-2 border bg-white rounded-md duration-100 w-full text-center h-40 overflow-scroll scrollbar-hide">
                  {ages.map((_age) => (
                    <p
                      key={_age}
                      onClick={() => {
                        let minAge = _age;

                        if (props.communityCreateDto.maxAge != null && _age > props.communityCreateDto.maxAge) {
                          minAge = props.communityCreateDto.maxAge;
                        }

                        props.setCommunityCreateDto({ ...props.communityCreateDto, minAge });
                        setMinAgeOptionsOpen(false);
                      }}
                    >
                      {`${_age} 세`}
                    </p>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="mx-1.5 flex items-center">
              <img src="/images/minus.png" alt="" className="w-3" />
            </div>
            <div
              className="relative"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                setTeamOptionsOpen(false);
                setMinAgeOptionsOpen(false);
              }}
            >
              <div className="w-28 border border-gary3 rounded-md p-2 text-center" onClick={() => setMaxAgeOptionsOpen(true)}>
                <span className={`text-sm font-normal ${props.communityCreateDto.maxAge == null ? "textGray4 " : ""}`}>
                  {props.communityCreateDto.maxAge == null ? "최대 나이" : `${props.communityCreateDto.maxAge} 세`}
                </span>
                <ChevronRight className="rotate-90" />
              </div>
              {maxAgeOptionsOpen ? (
                <div className="z-50 absolute translate-y-full bottom-0 px-5 py-2 border bg-white rounded-md duration-100 w-full text-center h-40 overflow-scroll scrollbar-hide">
                  {ages.map((_age) => (
                    <p
                      key={_age}
                      onClick={() => {
                        let maxAge = _age;

                        if (props.communityCreateDto.minAge != null && _age < props.communityCreateDto.minAge) {
                          maxAge = props.communityCreateDto.minAge;
                        }

                        props.setCommunityCreateDto({ ...props.communityCreateDto, maxAge });
                        setMaxAgeOptionsOpen(false);
                      }}
                    >
                      {`${_age} 세`}
                    </p>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3 text-sm font-medium textGray2">리더의 메시지</div>
          <div className="w-full p-5 bg-gray2 rounded-xl text-sm font-medium flex flex-col justify-center items-stretch" style={{ minHeight: 80 }}>
            <TextareaAutosize
              className="bg-transparent resize-none outline-none text-center"
              placeholder="리더로서 함께 하고 싶은 계획 내용을 자세히 소개해주세요. (50자 이상)"
              minLength={50}
              defaultValue={props.communityCreateDto.message}
              onChange={(e) => props.setCommunityCreateDto({ ...props.communityCreateDto, message: e.currentTarget.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
