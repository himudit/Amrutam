import React, { useState } from "react";
import { SocialLinks } from "./SocialLinks";
import { LanguageList } from "./LanguageList";
import { Specializations } from "./Specializations";
import { Concerns } from "./Concerns";
import { WorkExperience } from "./WorkExperience";
import { FeaturedReviews } from "./Reviews/FeaturedReviews";
import { doctorData } from "../data/doctorData";

export function DoctorInfo() {
  const [isExpanded, setIsExpanded] = useState(false);
  const aboutText = `Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the`;

  return (
    <div className="space-y-6">
      <section className="bg-white rounded-lg border overflow-hidden">
        {/* Top Green Section */}
        <div className="bg-[#f8f9ed] px-6 py-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">A Little About me</h3>
            <button
              className="text-sm font-medium text-gray-600 bg-white border rounded-full px-3 py-1 hover:bg-white"
            >
              Follow +
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          <p className="text-gray-600 text-sm leading-relaxed">
            {isExpanded ? aboutText : `${aboutText.slice(0, 150)}...`}
            {!isExpanded && (
              <button
                onClick={() => setIsExpanded(true)}
                className="text-gray-500 hover:text-gray-700 ml-1"
              >
                Read More
              </button>
            )}
          </p>

          {/* Green Line */}
          <div className="w-full h-[1px] bg-gray-300"></div>

          <div className="space-y-4">
            <LanguageList languages={doctorData.languages} />
            <SocialLinks />
          </div>
        </div>
      </section>

      <Specializations />
      <Concerns />
      <WorkExperience />
      <FeaturedReviews />
    </div>
  );
}
