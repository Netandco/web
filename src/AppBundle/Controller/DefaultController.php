<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        
        return $this->render('default/index.html.twig');
    }

    /**
    * @Route("/sendEmail", name="contactEmail")
    */
    public function sendContactEmailAction(Request $request)
    {

        $name   = $request->request->get('name');
        $email  = $request->request->get('email');
        $phone  = $request->request->get('phone');
        $message = $request->request->get('message');

        $message = \Swift_Message::newInstance()
            ->setSubject('Contact Email')
            ->setFrom($email)
            ->setTo(array('jherel.cordova@netandco.es', 'jh9@hotmail.es'))
            ->setBody(
                $this->renderView(
                    // app/Resources/views/emails/contact.html.twig
                    'emails/contact.html.twig',
                    array('name' => $name, 'email' => $email, 'phone' => $phone, 'message' => $message)
                ),
                'text/html'
            )
        ;
        $this->get('mailer')->send($message);

        return $this->redirectToRoute('homepage');
    }
}
