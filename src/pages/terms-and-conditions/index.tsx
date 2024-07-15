import Layout from "../../components/UI/Layout";

const TermsAndConditions = () => {
  return (
    <Layout>
      <div className="text-white max-w-[1440px] w-full mx-auto mb-[212px] mt-[52px]">
        <h1 className="mb-6 ml-4 font-work-sans font-semibold text-[40px] leading-[48px]">
          Terms & Conditions
        </h1>
        <div className="relative z-10 bg-[#141414] border-2 border-[#FFFFFF1A] rounded-[32px] p-12">
          <section className="mb-12">
            <h2 className="text-[32px] leading-[38.4px] font-semibold mb-4">
              Introduction
            </h2>
            <p className="text-[#FFFFFFCC] text-[20px] leading-[30px] font-work-sans">
              These Terms & Conditions govern the use of PredictCrypto.com. By
              accessing or using our website and services, you agree to comply
              with these terms. If you disagree, do not use our website and
              services.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-[32px] leading-[38.4px] font-semibold mb-4">
              Services Description
            </h2>
            <p className="text-[#FFFFFFCC] text-[20px] leading-[30px] font-work-sans">
              PredictCrypto.com offers multiple access and payment plans,
              designed to grant users access to varying levels of tools and
              resources. Details and specifications for each plan can be found
              on our website.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-[32px] leading-[38.4px] font-semibold mb-4">
              Subscription, Billing and Access
            </h2>
            <p className="text-[#FFFFFFCC] text-[20px] leading-[30px] font-work-sans">
              By opting into one of our payment plans, you agree to continue
              paying the costs that your chosen plan requires. By opting into
              one of our subscription plans, you commit to paying the
              corresponding monthly fees. These fees will be automatically
              billed to your registered payment method on the recurring date of
              your subscription start. If you are using $PREDICT for access to
              PredictCrypto.com, you agree to lose access when you are no longer
              in ownership of the requirement amount of $PREDICT tokens.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-[32px] leading-[38.4px] font-semibold mb-4">
              Cancellations
            </h2>
            <p className="text-[#FFFFFFCC] text-[20px] leading-[30px] font-work-sans">
              You may cancel your subscription at any time through your current
              plan section on PredictCrypto.com. However, the cancellation will
              only take effect at the end of the current monthly billing period.
              No pro-rata refunds will be provided, and you will retain full
              access to the services until the end of said period.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-[32px] leading-[38.4px] font-semibold mb-4">
              Limitation of Liability
            </h2>
            <p className="text-[#FFFFFFCC] text-[20px] leading-[30px] font-work-sans">
              PredictCrypto.com and all its services are offered "as is,"
              without any kind of warranties, either expressed or implied. While
              we strive to ensure that our tool is accurate and reliable,
              PredictCrypto.com does not guarantee the accuracy, completeness,
              availability, or timeliness of any information on the site.
            </p>
            <p className="text-[#FFFFFFCC] text-[20px] leading-[30px] font-work-sans">
              Under no circumstances will PredictCrypto.com, or its affiliates,
              directors, employees, or licensors be liable for any direct,
              indirect, punitive, incidental, special, or consequential damages
              resulting from the use or the inability to use our services.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-[32px] leading-[38.4px] font-semibold mb-4">
              Changes and Modifications
            </h2>
            <p className="text-[#FFFFFFCC] text-[20px] leading-[30px] font-work-sans">
              We reserve the right to revise and modify these Terms & Conditions
              at any time, at our sole discretion. Changes will become effective
              immediately upon posting on the website. By continuing to use
              PredictCrypto.com following the posting of changes, you accept
              such modifications.
            </p>
          </section>
          <section>
            <h2 className="text-[32px] leading-[38.4px] font-semibold mb-4">
              Contact
            </h2>
            <p className="text-[#FFFFFFCC] text-[20px] leading-[30px] font-work-sans">
              For questions, comments, or concerns related to these Terms &
              Conditions, please contact us at support@predictcrypto.com.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;
