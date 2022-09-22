/* eslint-disable @next/next/no-img-element */
import { ChevronRight } from "@mui/icons-material";
import { TextareaAutosize } from "@mui/material";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { offers } from "../../../constants/communityTypes";

export default function PayOpenStep2(props) {
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

  const saveImage = (e) => {
    props.communityCreateDto.images.push(e.target.files[0]);
    props.setCommunityCreateDto({ ...props.communityCreateDto });
  };

  const amountFormat = () => props.communityCreateDto.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // 이미지 url 체크
  const imageUrlCheck = (_imageFile) => {
    if (typeof _imageFile === "string") return _imageFile;

    return URL.createObjectURL(_imageFile);
  };

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

        {/* 가격 */}
        <div>
          <div className="mb-3 text-sm font-medium textGray2">1시간당 가격</div>
          <div className="flex h-10 border border-gary3 rounded-md py-1.5 px-3 text-center">
            <input
              className="outline-none w-full"
              min={0}
              type="text"
              value={amountFormat()}
              placeholder="1시간당 가격을 입력해주세요."
              onChange={(e) => {
                const amount = e.currentTarget.value.trim() == "" ? 0 : parseInt(e.currentTarget.value.trim().replace(/[^0-9]/g, ""));
                props.setCommunityCreateDto({ ...props.communityCreateDto, amount: amount });
              }}
            />
            <span>원</span>
          </div>
        </div>

        {/* 제공사항 */}
        <div>
          <div className="text-sm font-medium mb-3">
            <span className="textGray2">리더의 제공 사항</span>
            <span className="textGray4"> (중복가능)</span>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-3 mb-4 font-normal items-center">
              {offers.map((_offer, index) => {
                const _findIndex = props.communityCreateDto.offers.findIndex((_item) => _item == _offer);

                return (
                  <div
                    key={index}
                    className={`rounded-md textGray2 text-sm py-2 text-center border ${
                      _findIndex >= 0 ? "border-orange5 textOrange5" : "border-gary3 textGray2"
                    }`}
                    onClick={() => {
                      if (_findIndex >= 0) {
                        props.communityCreateDto.offers.splice(_findIndex, 1);
                      } else {
                        props.communityCreateDto.offers.push(_offer);
                      }

                      props.setCommunityCreateDto({ ...props.communityCreateDto });
                    }}
                  >
                    {_offer}
                  </div>
                );
              })}
            </div>

            <div
              className={`flex p-3 border border-color4 rounded-md ${
                props.communityCreateDto.offers.findIndex((_item) => _item == "직접입력") >= 0 ? "" : "hidden"
              }`}
            >
              <input
                type="text"
                placeholder="그 외 리더의 역할을 적어주세요."
                defaultValue={props.communityCreateDto.directOffer}
                className="flex-auto text-sm font-medium focus:outline-none textGray1 placeholder:textGray5 placeholder:text-start"
                onChange={(e) => {
                  props.setCommunityCreateDto({ ...props.communityCreateDto, directOffer: e.currentTarget.value.trim() });
                }}
              />
            </div>
          </div>
        </div>

        <div className="pb-5">
          <div className="mb-3 text-sm font-medium textGray2">리더의 메시지</div>
          <div className="w-full mb-3 p-5 bg-gray2 rounded-xl text-sm font-medium flex flex-col justify-center items-stretch" style={{ minHeight: 80 }}>
            <TextareaAutosize
              className="bg-transparent resize-none outline-none text-center"
              placeholder="리더로서 함께 하고 싶은 계획 내용을 자세히 소개해주세요. (50자 이상)"
              defaultValue={props.communityCreateDto.message}
              minLength={50}
              onChange={(e) => props.setCommunityCreateDto({ ...props.communityCreateDto, message: e.currentTarget.value })}
            />
          </div>
          <div className="grid gap-3 grid-cols-4">
            <label
              htmlFor="imgUpload"
              style={{ display: "inline-block", fontSize: "inherit", lineHeight: "normal", verticalAlign: "middle", cursor: "pointer" }}
            >
              <div className="flex flex-col justify-center text-center items-center border border-gary3 rounded-md p-4">
                <img src="/images/component-64.png" alt="" className="w-5 h-4 mb-2" />
                <p className="textGray3 text-xs font-normal">
                  <span className="textOrange5">{props.communityCreateDto.images.length}</span>/3
                </p>
              </div>
              <input
                type="file"
                id="imgUpload"
                className="hidden"
                accept="image/*"
                onChange={saveImage}
                onClick={(e) => (e.target.value = null)}
                disabled={props.communityCreateDto.images.length >= 3}
              />
            </label>

            {props.communityCreateDto.images.map((_imageFile, index) => (
              <div key={index} className="relative">
                <img src={imageUrlCheck(_imageFile)} className="w-full rounded-md" alt="" />
                <img
                  src="/images/ic-delete.png"
                  alt=""
                  className="w-4 h-4 absolute top-[-0.375rem] right-[-0.375rem]"
                  onClick={() => {
                    props.communityCreateDto.images.splice(index, 1);
                    props.setCommunityCreateDto({ ...props.communityCreateDto });
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
