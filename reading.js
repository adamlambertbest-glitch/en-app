/* TOEIC Part 6·7 지문 문제 (Claude 작성). passage가 있으면 지문과 함께 출제돼요. exp: 해설 */
(function(){
const R=[];
const add=(set,id,passage,s,c,a,exp)=>R.push({set,id,passage,s,c,a,exp});
const P61=`To: All Staff
From: Facilities Department
Subject: Elevator maintenance

Please be aware that the main elevator will be out of service from Monday, March 10, to Wednesday, March 12. During this time, technicians will -------(131) the entire system. Employees are asked to use the stairs or the service elevator at the back of the building. -------(132)

We understand that this may cause some -------(133), especially for staff on the upper floors. Thank you in advance for your -------(134).`;
add("Part 6 · 세트 1","p6-131",P61,"(131)에 들어갈 알맞은 것은?",["replace","replacing","replacement","replaced"],0,"조동사 will 뒤는 동사원형 → replace.");
add("Part 6 · 세트 1","p6-132",P61,"(132)에 들어갈 알맞은 문장은?",["The service elevator can be accessed with your ID card.","The new elevator was installed last year.","Please submit your timesheets by Friday.","The cafeteria will offer a new menu next month."],0,"앞 문장에서 서비스 엘리베이터를 쓰라고 했으니, 그 엘리베이터 이용 방법이 이어지는 게 자연스러워요.");
add("Part 6 · 세트 1","p6-133",P61,"(133)에 들어갈 알맞은 것은?",["inconvenience","inconvenient","inconveniently","inconvenienced"],0,"some + 명사 → inconvenience(불편).");
add("Part 6 · 세트 1","p6-134",P61,"(134)에 들어갈 알맞은 것은?",["patience","patient","patiently","patients"],0,"소유격 your 뒤 명사 + '인내에 감사' → patience. patients는 '환자들'.");

const P62=`Greenfield Public Library is pleased to announce the -------(135) of its renovated reading room on April 2. The room now features comfortable seating, improved lighting, and 30 new computer stations. -------(136), visitors can now reserve private study rooms online.

To celebrate, the library will host a series of free workshops throughout April. Topics include resume writing, basic coding, and personal finance. Space is limited, so we recommend -------(137) early. -------(138) For more information, visit www.greenfieldlibrary.org.`;
add("Part 6 · 세트 2","p6-135",P62,"(135)에 들어갈 알맞은 것은?",["open","opened","opening","opener"],2,"the + ___ + of → 명사 opening(개장).");
add("Part 6 · 세트 2","p6-136",P62,"(136)에 들어갈 알맞은 것은?",["In addition","However","Instead","Otherwise"],0,"새 시설 소개에 이어 또 다른 장점을 덧붙임 → In addition(게다가).");
add("Part 6 · 세트 2","p6-137",P62,"(137)에 들어갈 알맞은 것은?",["register","registering","to register","registered"],1,"recommend + 동명사 → registering.");
add("Part 6 · 세트 2","p6-138",P62,"(138)에 들어갈 알맞은 문장은?",["Registration can be completed at the front desk or online.","The library was first built in 1965.","Our parking lot will be repaved next year.","Late fees have recently been increased."],0,"앞에서 일찍 등록하라고 했으니 등록 방법이 이어지는 게 자연스러워요.");

const P71=`NOTICE TO ALL TENANTS

Due to scheduled water pipe repairs, water service at Riverside Apartments will be shut off on Thursday, June 6, from 9:00 A.M. to 3:00 P.M. Residents are advised to store enough water for drinking and cooking before the repairs begin.

The management office apologizes for any inconvenience and thanks residents for their cooperation. Questions may be directed to the office at 555-0142.`;
add("Part 7 · 세트 1","p7-1a",P71,"What is the purpose of the notice?",["To announce a temporary service interruption","To introduce a new building manager","To request rent payments","To advertise an apartment for rent"],0,"수도관 수리로 물 공급이 잠시 끊긴다는 공지 → 일시적인 서비스 중단 안내. shut off → interruption으로 바꿔 말했어요.");
add("Part 7 · 세트 1","p7-1b",P71,"What are residents asked to do?",["Contact the office before Thursday","Save water in advance","Leave the building during the repairs","Pay for the pipe repairs"],1,"store enough water ... before the repairs begin → 미리 물을 받아 두기(save water in advance).");

const P72=`From: Laura Chen <lchen@brightdesign.com>
To: Mark Evans <mevans@solartech.com>
Date: October 14
Subject: Website project

Dear Mr. Evans,

Thank you for meeting with me last Friday to discuss the redesign of SolarTech's Web site. As promised, I have attached a draft proposal that includes a project timeline and cost estimate.

Based on our conversation, we will focus on making the site easier to navigate on mobile devices. We will also add a customer review section, which you mentioned was a priority.

Please review the proposal and let me know if you would like any changes. If everything looks acceptable, we can begin work on November 1.

Best regards,
Laura Chen
Bright Design`;
add("Part 7 · 세트 2","p7-2a",P72,"Why did Ms. Chen write the e-mail?",["To send a proposal after a meeting","To cancel a scheduled meeting","To request payment for completed work","To apply for a design position"],0,"회의 후 약속대로 제안서를 첨부해 보낸다는 내용이에요.");
add("Part 7 · 세트 2","p7-2b",P72,"What is suggested about SolarTech?",["It recently hired Ms. Chen.","It wants customers to be able to post reviews.","It has already approved the budget.","It plans to close its Web site."],1,"a customer review section, which you mentioned was a priority → 고객 후기 기능을 원함.");
add("Part 7 · 세트 2","p7-2c",P72,"In the e-mail, the word \"acceptable\" is closest in meaning to",["satisfactory","available","flexible","affordable"],0,"If everything looks acceptable = 다 괜찮아 보이면 → satisfactory(만족스러운).");

const P73=`OFFICE SPACE AVAILABLE – DOWNTOWN HARTFORD

A fully furnished office suite is available for lease at 210 Main Street, starting August 1. The 120-square-meter suite includes three private offices, a conference room, and a small kitchen. Rent is $2,400 per month, which includes electricity and Internet service. The building offers 24-hour security and is a five-minute walk from Central Station. Tenants must sign a lease of at least one year.

To arrange a viewing, call Dana Ross at 555-0198.`;
add("Part 7 · 세트 3","p7-3a",P73,"What is NOT mentioned as being included with the office?",["Electricity","Internet service","Furniture","Parking"],3,"전기·인터넷은 월세 포함, fully furnished(가구 완비). 주차는 언급이 없어요.");
add("Part 7 · 세트 3","p7-3b",P73,"What is a requirement for tenants?",["They must sign a lease of at least one year.","They must move in before August 1.","They must pay a security fee each month.","They must work in the finance industry."],0,"Tenants must sign a lease of at least one year.");

const P74=`BAYSIDE (May 3) – Kelton Foods announced on Tuesday that it will build a new distribution center on the outskirts of Bayside. The facility, which is expected to open next spring, will allow the company to deliver fresh products to stores across the region more quickly.

According to CEO Martin Hale, the project will create approximately 300 jobs. "Bayside's location and skilled workforce made it the ideal choice," Mr. Hale said. Construction will begin in June, pending final approval from the city council.`;
add("Part 7 · 세트 4","p7-4a",P74,"What is the article mainly about?",["A company's plan to build a new facility","The opening of a new grocery store","A change in a company's leadership","A city council election"],0,"Kelton Foods가 새 물류 센터를 짓는다는 기사예요. distribution center → facility로 바꿔 말했어요.");
add("Part 7 · 세트 4","p7-4b",P74,"According to the article, what must happen before construction begins?",["The city council must give final approval.","Kelton Foods must hire 300 workers.","The distribution center must be inspected.","Mr. Hale must visit Bayside."],0,"pending final approval from the city council → 시의회의 최종 승인이 필요.");
add("Part 7 · 세트 4","p7-4c",P74,"The word \"pending\" in paragraph 2, line 3, is closest in meaning to",["awaiting","following","refusing","completing"],0,"pending = ~을 기다리는 중인 → awaiting.");

window.N1_BOOKQ=(window.N1_BOOKQ||[]).concat(R);
})();
