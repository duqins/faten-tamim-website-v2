import { useLanguage } from '../../context/LanguageContext'
import LegalPage from '../../components/LegalPage'

export default function Disclaimer() {
  const { isAr } = useLanguage()

  const content = isAr ? {
    title: 'إخلاء المسؤولية',
    updated: 'آخر تحديث: مارس 2025',
    sections: [
      { heading: '1. المعلومات القانونية العامة', text: 'جميع المعلومات المقدَّمة في هذا الموقع هي لأغراض عامة فقط وتم توفيرها بحسن نية. لا نقدم أي إقرارات أو ضمانات من أي نوع، صريحة كانت أم ضمنية، فيما يخص اكتمال المعلومات أو دقتها أو موثوقيتها أو ملاءمتها أو توافرها.' },
      { heading: '2. لا علاقة موكل-محامٍ', text: 'المعلومات الواردة في هذا الموقع لا تُنشئ علاقة محامٍ-موكل بينك وبين مكتبنا. لا تعتمد على المحتوى الموجود في هذا الموقع باعتباره مشورة قانونية. استشر دائمًا محاميًا مؤهلًا في ما يخص وضعك القانوني المحدد.' },
      { heading: '3. عدم ضمان النتائج', text: 'النتائج السابقة التي حققها مكتبنا لعملائنا لا تضمن نتائج مماثلة في القضايا المستقبلية. كل قضية قانونية فريدة، والنتائج تعتمد على عوامل عدة تشمل وقائع القضية والأدلة والقانون المنطبق والتفاصيل الإجرائية وتقدير المحكمة.' },
      { heading: '4. دقة المعلومات', text: 'بينما نبذل جهودًا معقولة للحفاظ على دقة المعلومات على موقعنا وحداثتها، يتطور القانون باستمرار. لا يُعدّ المحتوى بالضرورة انعكاسًا للوضع القانوني الراهن. لا تعتمد على محتوى موقعنا لاتخاذ قرارات قانونية دون التحقق من صلاحيته مع محامٍ مؤهل.' },
      { heading: '5. الروابط الخارجية', text: 'قد يتضمن موقعنا روابط لمواقع خارجية معلوماتية. لا نتحمل مسؤولية محتوى تلك المواقع ولا ندعمها. تصفّح المواقع الخارجية على مسؤوليتك الخاصة.' },
      { heading: '6. توافر الخدمة', text: 'نسعى جاهدين للحفاظ على توافر موقعنا الإلكتروني، غير أننا لا نضمن توافره الدائم. قد يتعطل الموقع بسبب الصيانة أو تحديثات تقنية أو ظروف خارجة عن إرادتنا.' },
      { heading: '7. حدود التزاماتنا', text: 'لن يكون مكتب د. فاتن تميم للاستشارات والمرافعات القانونية مسؤولًا عن أي خسارة أو ضرر ينشأ عن استخدام هذا الموقع أو الاعتماد على المعلومات الواردة فيه. يشمل ذلك الأضرار غير المباشرة أو التبعية أو الخاصة أو العقابية.' },
    ],
  } : {
    title: 'Disclaimer',
    updated: 'Last updated: March 2025',
    sections: [
      { heading: '1. General Legal Information', text: 'All information provided on this website is for general purposes only and has been provided in good faith. We make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of the information.' },
      { heading: '2. No Attorney-Client Relationship', text: 'The information on this website does not create an attorney-client relationship between you and our firm. Do not rely on the content of this website as legal advice. Always consult a qualified lawyer regarding your specific legal situation.' },
      { heading: '3. No Guarantee of Results', text: 'Past results achieved by our firm for clients do not guarantee similar outcomes in future matters. Every legal case is unique, and outcomes depend on many factors including the facts, evidence, applicable law, procedural details, and judicial discretion.' },
      { heading: '4. Accuracy of Information', text: 'While we make reasonable efforts to keep information on our website accurate and current, the law is constantly evolving. Content may not necessarily reflect the current state of the law. Do not rely on our website content to make legal decisions without verifying its currency with a qualified lawyer.' },
      { heading: '5. External Links', text: 'Our website may include links to external websites for informational purposes. We are not responsible for the content of those sites and do not endorse them. Visiting external sites is at your own risk.' },
      { heading: '6. Service Availability', text: 'We strive to maintain availability of our website but cannot guarantee uninterrupted access. The site may be unavailable due to maintenance, technical updates, or circumstances beyond our control.' },
      { heading: '7. Limits of Our Liability', text: 'Dr. Faten Tamim Advocates & Legal Consultants will not be liable for any loss or damage arising from use of this website or reliance on the information contained herein. This includes indirect, consequential, special, or punitive damages.' },
    ],
  }

  return <LegalPage content={content} />
}
