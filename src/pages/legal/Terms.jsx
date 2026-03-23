import { useLanguage } from '../../context/LanguageContext'
import LegalPage from '../../components/LegalPage'

export default function Terms() {
  const { isAr } = useLanguage()

  const content = isAr ? {
    title: 'شروط الاستخدام',
    updated: 'آخر تحديث: مارس 2025',
    sections: [
      { heading: '1. قبول الشروط', text: 'بوصولك إلى هذا الموقع واستخدامه، فإنك توافق على الالتزام بشروط الاستخدام هذه وجميع القوانين واللوائح المنطبقة. إذا كنت لا توافق على أي من هذه الشروط، فيُرجى التوقف عن استخدام هذا الموقع. هذه الشروط تحكم استخدامك للموقع الإلكتروني لمكتب د. فاتن تميم للاستشارات والمرافعات القانونية.' },
      { heading: '2. لا مشورة قانونية', text: 'المحتوى الوارد في هذا الموقع هو للأغراض المعلوماتية والتعليمية العامة فحسب. لا يُشكّل هذا المحتوى مشورة قانونية ولا ينبغي الاعتماد عليه كبديل عنها. لا ينشأ عن استخدام هذا الموقع علاقة موكل-محامٍ بينك وبين مكتبنا أو أي من محامينا. لا تتخذ أي إجراء أو تمتنع عنه استنادًا إلى المعلومات الواردة في هذا الموقع دون أخذ المشورة القانونية المناسبة بشأن وضعك الخاص.' },
      { heading: '3. لا علاقة موكل-محامٍ', text: 'التواصل معنا عبر هذا الموقع أو نموذج الاتصال أو البريد الإلكتروني لا ينشئ علاقة موكل-محامٍ. لا تُفصح عن أي معلومات سرية أو حساسة قبل إبرام اتفاقية خدمات قانونية رسمية معنا. تنشأ علاقة الموكل-المحامي فقط بعد التوقيع على اتفاقية خطية وقبول قضيتك من قِبل مكتبنا.' },
      { heading: '4. الاستخدام المقبول', text: 'توافق على عدم استخدام هذا الموقع لأي غرض غير قانوني أو محظور بموجب هذه الشروط. يحظر عليك استخدام الموقع بأي طريقة قد تتسبب في ضرر له أو تشوّه صورته أو تعطّله أو تقيّده أو تمنع الآخرين من استخدامه. لا يُسمح بمحاولة الوصول غير المصرح به إلى أي جزء من الموقع أو أنظمته المتصلة.' },
      { heading: '5. الملكية الفكرية', text: 'جميع المحتويات الواردة في هذا الموقع — بما في ذلك النصوص والصور والشعارات والتصميم — هي ملك لمكتب د. فاتن تميم للاستشارات والمرافعات القانونية أو مرخصة له، وتخضع لحماية قوانين حقوق الملكية الفكرية. يُحظر نسخ أي محتوى أو إعادة إنتاجه أو توزيعه أو تعديله دون الحصول على إذن كتابي مسبق منّا.' },
      { heading: '6. الروابط الخارجية', text: 'قد يتضمن الموقع روابط لمواقع طرف ثالث. هذه الروابط معروضة لراحتك فحسب، ولا تعني موافقتنا على تلك المواقع أو محتوياتها أو خدماتها. لسنا مسؤولين عن محتوى المواقع الخارجية ولا عن الممارسات المتعلقة بالخصوصية فيها. نشجعك على مراجعة سياسات الخصوصية وشروط الاستخدام لأي موقع خارجي تزوره.' },
      { heading: '7. إخلاء المسؤولية', text: 'يُقدَّم هذا الموقع "كما هو" و"حسب التوافر" دون أي ضمانات، سواء أكانت صريحة أم ضمنية. لا نضمن أن المعلومات الواردة في الموقع دقيقة أو مكتملة أو محدّثة. بعض المحتوى القانوني قد يتغير بتطور القانون، وما يكون صحيحًا وقت الكتابة قد لا ينطبق بعدها.' },
      { heading: '8. تحديد المسؤولية', text: 'إلى أقصى حد يسمح به القانون المنطبق، لن يكون مكتب د. فاتن تميم للاستشارات والمرافعات القانونية وشركاؤه وموظفوه مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو عقابية أو تبعية ناشئة عن استخدامك لهذا الموقع أو عدم قدرتك على استخدامه.' },
      { heading: '9. القانون الحاكم والاختصاص القضائي', text: 'تخضع هذه الشروط وتُفسَّر وفق قوانين الإمارات العربية المتحدة. تختص محاكم أبوظبي في الإمارات حصرًا بالفصل في أي نزاعات تنشأ عن هذه الشروط أو تتعلق بها.' },
      { heading: '10. التغييرات على الشروط', text: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. التغييرات سارية فور نشرها على الموقع. استمرارك في استخدام الموقع بعد نشر التغييرات يُعدّ قبولًا منك لها. نشجعك على مراجعة هذه الشروط دوريًا.' },
    ],
  } : {
    title: 'Terms of Use',
    updated: 'Last updated: March 2025',
    sections: [
      { heading: '1. Acceptance of Terms', text: 'By accessing and using this website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, please discontinue using this website. These Terms govern your use of the Dr. Faten Tamim Advocates & Legal Consultants website.' },
      { heading: '2. No Legal Advice', text: 'The content on this website is provided for general informational and educational purposes only. It does not constitute legal advice and should not be relied upon as a substitute for legal advice. Use of this website does not create an attorney-client relationship between you and our firm or any of our lawyers. Do not take or refrain from taking any action based on information on this website without obtaining appropriate legal advice regarding your specific situation.' },
      { heading: '3. No Attorney-Client Relationship', text: 'Contacting us through this website, the contact form, or by email does not create an attorney-client relationship. Please do not share confidential or sensitive information until a formal legal services agreement has been established with us. An attorney-client relationship is formed only after execution of a written agreement and acceptance of your matter by our firm.' },
      { heading: '4. Acceptable Use', text: 'You agree not to use this website for any unlawful purpose or any purpose prohibited by these Terms. You may not use the site in any way that could damage, discredit, disable, overburden, or impair it, or interfere with anyone else\'s use. Unauthorized access to any part of the website or its connected systems is strictly prohibited.' },
      { heading: '5. Intellectual Property', text: 'All content on this website — including text, images, logos, and design — is owned by or licensed to Dr. Faten Tamim Advocates & Legal Consultants and is protected by intellectual property laws. No content may be copied, reproduced, distributed, or modified without our prior written permission.' },
      { heading: '6. Third-Party Links', text: 'This website may contain links to third-party websites. These links are provided for your convenience only and do not imply our endorsement of those sites, their content, or their services. We are not responsible for the content of external sites or their privacy practices. We encourage you to review the privacy policies and terms of use of any external site you visit.' },
      { heading: '7. Disclaimers', text: 'This website is provided on an "as is" and "as available" basis without warranties of any kind, express or implied. We do not warrant that the information on the site is accurate, complete, or current. Some legal content may change as the law evolves, and what was accurate at the time of writing may not remain so.' },
      { heading: '8. Limitation of Liability', text: 'To the maximum extent permitted by applicable law, Dr. Faten Tamim Advocates & Legal Consultants and its partners and employees shall not be liable for any direct, indirect, incidental, special, punitive, or consequential damages arising from your use of, or inability to use, this website.' },
      { heading: '9. Governing Law & Jurisdiction', text: 'These Terms are governed by and construed in accordance with the laws of the United Arab Emirates. The courts of Abu Dhabi, UAE, shall have exclusive jurisdiction over any disputes arising from or related to these Terms.' },
      { heading: '10. Changes to Terms', text: 'We reserve the right to modify these Terms at any time. Changes are effective upon posting to the website. Your continued use of the website after changes are posted constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.' },
    ],
  }

  return <LegalPage content={content} />
}
