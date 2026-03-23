import { useLanguage } from '../../context/LanguageContext'
import LegalPage from '../../components/LegalPage'

export default function Privacy() {
  const { isAr } = useLanguage()

  const content = isAr ? {
    title: 'سياسة الخصوصية',
    updated: 'آخر تحديث: مارس 2025',
    sections: [
      {
        heading: '1. المعلومات التي نجمعها',
        text: 'نجمع المعلومات التي تقدمها لنا طوعًا، بما في ذلك الاسم وعنوان البريد الإلكتروني ورقم الهاتف وتفاصيل الاستفسار عند التواصل معنا عبر نموذج الاتصال أو البريد الإلكتروني أو الهاتف. قد نجمع أيضًا معلومات تقنية مثل عنوان IP ونوع المتصفح وصفحات الموقع التي تزورها عبر ملفات تعريف الارتباط وتقنيات التتبع المماثلة.',
      },
      {
        heading: '2. كيف نستخدم معلوماتك',
        text: 'نستخدم معلوماتك للرد على استفساراتك وتقديم الخدمات القانونية المطلوبة، وإرسال تحديثات قانونية وتواصل يتصل بخدماتنا (بموافقتك)، وتحسين موقعنا الإلكتروني وخدماتنا، والامتثال للالتزامات القانونية والتنظيمية، وحماية حقوقنا القانونية وحقوق موكلينا.',
      },
      {
        heading: '3. الأسس القانونية للمعالجة',
        text: 'نعالج بياناتك الشخصية استنادًا إلى: موافقتك الصريحة عند تقديم استفسار، وتنفيذ العقد حيثما طُلبت خدماتنا، والامتثال للالتزامات القانونية، ومصالحنا المشروعة في تقديم وتطوير خدماتنا القانونية المهنية.',
      },
      {
        heading: '4. مشاركة معلوماتك',
        text: 'لا نبيع معلوماتك الشخصية لأطراف ثالثة. قد نشارك المعلومات مع خبراء خارجيين أو شركاء من المحامين بالقدر الضروري لتقديم الخدمات القانونية، ومزودي الخدمات الذين يساعدوننا في تشغيل موقعنا (مع اتفاقيات حماية البيانات المناسبة)، والسلطات التنظيمية أو الجهات المختصة حيثما يُلزمنا القانون.',
      },
      {
        heading: '5. التحويلات الدولية',
        text: 'يقع مكتبنا في أبوظبي، الإمارات العربية المتحدة. إذا كنت تتواصل معنا من خارج الإمارات، فاعلم أن بياناتك ستُعالج في الإمارات. نتخذ الضمانات المناسبة لحماية بياناتك وفق المعايير الدولية.',
      },
      {
        heading: '6. الاحتفاظ بالبيانات',
        text: 'نحتفظ بمعلوماتك الشخصية طوال فترة ضرورية لتقديم الخدمات وللأغراض التي جُمعت لأجلها، وللامتثال لمتطلبات الاحتفاظ القانونية والمهنية المنطبقة على مهنة المحاماة في الإمارات. في العادة لا تتجاوز مدة الاحتفاظ 10 سنوات من إنهاء العلاقة مع الموكل.',
      },
      {
        heading: '7. حقوقك',
        text: 'يحق لك طلب الوصول إلى بياناتك الشخصية التي نحتفظ بها، وطلب تصحيح أي بيانات غير دقيقة، وطلب مسح بياناتك في الحالات المناسبة، والاعتراض على معالجة معينة، وسحب الموافقة في أي وقت (دون الإخلال بمشروعية المعالجة السابقة). لممارسة هذه الحقوق، تواصل معنا عبر البريد الإلكتروني: f.alsulebi@gmail.com',
      },
      {
        heading: '8. الأمان',
        text: 'نطبق تدابير أمنية تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الإفصاح أو التعديل أو الإتلاف. غير أنه لا يوجد نظام نقل أو تخزين إلكتروني آمن بشكل كامل؛ لذا لا يمكننا ضمان الأمان المطلق.',
      },
      {
        heading: '9. الأطفال',
        text: 'موقعنا الإلكتروني غير موجه للأطفال دون سن 18 عامًا. لا نجمع معلومات شخصية من الأطفال دون الموافقة الوالدية. إذا علمنا بجمع بيانات شخصية من طفل دون الموافقة المناسبة، سنحذفها فورًا.',
      },
      {
        heading: '10. تحديثات هذه السياسة',
        text: 'قد نحدّث سياسة الخصوصية هذه من حين لآخر. سنخطرك بالتغييرات الجوهرية بنشر سياسة جديدة على هذه الصفحة مع تحديث تاريخ "آخر تحديث". يُشجَّع على مراجعة هذه السياسة دوريًا.',
      },
      {
        heading: '11. اتصل بنا',
        text: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارسات البيانات لدينا، يُرجى التواصل معنا: البريد الإلكتروني: f.alsulebi@gmail.com | الهاتف: 971 52 545 1974 | العنوان: شارع المطار، بناية حميد القبيسي، طابق الميزانين، مكتب (3)، أبوظبي، الإمارات العربية المتحدة',
      },
    ],
  } : {
    title: 'Privacy Policy',
    updated: 'Last updated: March 2025',
    sections: [
      {
        heading: '1. Information We Collect',
        text: 'We collect information you voluntarily provide to us, including your name, email address, phone number, and inquiry details when you contact us through our contact form, email, or phone. We may also collect technical information such as IP address, browser type, and pages visited on our website through cookies and similar tracking technologies.',
      },
      {
        heading: '2. How We Use Your Information',
        text: 'We use your information to: respond to your inquiries and provide requested legal services; send legal updates and communications related to our services (with your consent); improve our website and services; comply with legal and regulatory obligations; and protect our legal rights and those of our clients.',
      },
      {
        heading: '3. Legal Bases for Processing',
        text: 'We process your personal data based on: your explicit consent when submitting an inquiry; performance of a contract where our services are engaged; compliance with legal obligations; and our legitimate interests in providing and developing our professional legal services.',
      },
      {
        heading: '4. Sharing Your Information',
        text: 'We do not sell your personal information to third parties. We may share information with: external experts or co-counsel attorneys to the extent necessary to deliver legal services; service providers who assist us in operating our website (with appropriate data protection agreements); and regulatory authorities or courts where required by law.',
      },
      {
        heading: '5. International Transfers',
        text: 'Our firm is based in Abu Dhabi, United Arab Emirates. If you contact us from outside the UAE, be aware that your data will be processed in the UAE. We take appropriate safeguards to protect your data to international standards.',
      },
      {
        heading: '6. Data Retention',
        text: 'We retain your personal information for as long as necessary to provide our services and for the purposes for which it was collected, and to comply with legal and professional retention requirements applicable to law firms in the UAE. Retention periods generally do not exceed 10 years from the end of the client relationship.',
      },
      {
        heading: '7. Your Rights',
        text: 'You have the right to: request access to your personal data we hold; request correction of any inaccurate data; request erasure of your data in appropriate circumstances; object to certain processing; and withdraw consent at any time (without affecting the lawfulness of prior processing). To exercise these rights, contact us at: f.alsulebi@gmail.com',
      },
      {
        heading: '8. Security',
        text: 'We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no electronic transmission or storage system is completely secure, and we cannot guarantee absolute security.',
      },
      {
        heading: '9. Children',
        text: 'Our website is not directed at children under the age of 18. We do not knowingly collect personal information from children without parental consent. If we learn we have collected personal data from a child without appropriate consent, we will delete it promptly.',
      },
      {
        heading: '10. Updates to This Policy',
        text: 'We may update this Privacy Policy from time to time. We will notify you of material changes by posting a new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.',
      },
      {
        heading: '11. Contact Us',
        text: 'If you have any questions about this Privacy Policy or our data practices, please contact us: Email: f.alsulebi@gmail.com | Phone: 971 52 545 1974 | Address: Airport Road, Hamid Al Qubaisi Bldg, Mezzanine Floor, Office 3, Abu Dhabi, UAE',
      },
    ],
  }

  return <LegalPage content={content} />
}
