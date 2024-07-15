import FadeInWhenVisible from "./FadeInWhenVisible";

const AboutWN = () => {
  return (
    <section className="bg-mainBlack text-white space-y-8 max-w-[1440px] mx-auto w-full lg:mt-[180px] my-20 lg:mb-[694px]">
      <div className="p-8 bg-[#1C1C1C] rounded-[32px] flex sm:flex-row flex-col items-start gap-[30px] border-2 border-[#FFFFFF1A]">
        <FadeInWhenVisible
          direction="right"
          className="max-w-[231px] w-full shrink-0 "
        >
          <h2 className="text-[32px] lg:text-[40px] leading-[36px] lg:leading-[44px] font-semibold tracking-wide">
            What is the W&N?
          </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible direction="left" className="">
          <div className="flex flex-col gap-4">
            <p className="text-[18px] lg:text-[24px] leading-[28px] lg:leading-[36px] font-semibold text-[#FFFFFF99] tracking-wide">
              The{" "}
              <strong className="text-white">Wise & Naive Index "W&N"</strong>,
              is the most in-depth and up-to-date tool for tracking and scoring
              emotion sentiments within the crypto market. We're working with
              the biggest exchanges and platforms within crypto, and using our
              priceless experience to score this data to benefit everyone and
              every crypto currency.
            </p>
            <p className="text-[18px] lg:text-[24px] leading-[28px] lg:leading-[36px] font-semibold text-[#FFFFFF99] tracking-wide">
              <strong className="text-white">W&N</strong> is built from{" "}
              <strong className="text-white">10 major algorithms</strong> that
              provide a factor score based on impactful events and emotions
              within the market. Our{" "}
              <strong className="text-white">3 AI factors</strong> are
              Indicators, Community and Research. Our{" "}
              <strong className="text-white">7 data factors</strong>
              are Price, Volume, Volume Share, Momentum, Volatility, Whale Watch
              and Exchanges.
            </p>
          </div>
        </FadeInWhenVisible>
      </div>

      <div className="p-8 bg-[#1C1C1C] rounded-[32px] flex sm:flex-row flex-col items-start gap-[30px] border-2 border-[#FFFFFF1A]">
        <FadeInWhenVisible
          direction="right"
          className="max-w-[231px] w-full shrink-0 "
        >
          <h2 className="text-[32px] lg:text-[40px] leading-[36px] lg:leading-[44px] font-semibold tracking-wide">
            Why use the W&N?
          </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible direction="left" className="">
          <div className="flex flex-col gap-4">
            <p className="text-[18px] lg:text-[24px] leading-[28px] lg:leading-[36px] font-semibold text-[#FFFFFF99] tracking-wide">
              Only{" "}
              <strong className="text-white">
                1% of traders succeed at being profitable over a 5 year span
              </strong>
              . The other 99% fail, because of emotion.{" "}
              <strong className="text-white">
                Greed. Anger. FOMO. Depression. Euphoria. Pride
              </strong>
              . Uneducated and uncontrolled emotions are the difference maker
              between the majority and the elite. Using the power of AI, we no
              longer have to attempt to be stoic elites, we just have to know
              what they're doing.
            </p>
            <p className="text-[18px] lg:text-[24px] leading-[28px] lg:leading-[36px] font-semibold text-[#FFFFFF99] tracking-wide">
              AI gives us the opportunity to create our very own real-time
              indexes and sentiments including one of our very own and{" "}
              <strong className="text-white">
                first of its kind trading tool, the W&N
              </strong>
              . AI gives us the tools to not just look at charts and traders,
              but to understand the “why” behind it all. The emotion, the true
              reason for all decisions. If we know how the majority of traders
              are going to react to an event, or a chart, we know how to trade
              against them. <strong className="text-white">99% vs 1%</strong>.
            </p>
            <p className="text-[18px] lg:text-[24px] leading-[28px] lg:leading-[36px] font-semibold text-[#FFFFFF99] tracking-wide">
              For long-term crypto investors, it's best to buy and just hold.
              However, knowing when to enter and especially when to exit the
              markets is where the majority fail. It would be advisable to enter
              when the market is in an optimal state which is usually the
              scariest time to enter, and it would be advisable to exit when the
              market becomes naive and things feel{" "}
              <strong className="text-white">"too good to be true"</strong>.
            </p>
            <p className="text-[18px] lg:text-[24px] leading-[28px] lg:leading-[36px] font-semibold text-[#FFFFFF99] tracking-wide">
              For short-term crypto investors such as scalpers, day traders,
              momentum and attention investors, the best focus on smaller
              emotions and not the extreme ends of the W&N. It would be
              advisable to use the shorter time frame scores and to create your
              own strategy based on the beginnings of positive and negative
              emotions within the market such as{" "}
              <strong className="text-white">explosive</strong> and{" "}
              <strong className="text-white">wise</strong>.
            </p>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default AboutWN;
