<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


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
        $note   = $request->request->get('message');
        $message = \Swift_Message::newInstance()
            ->setSubject('Contact Net&Co Email')
            ->setFrom($email)
            ->setTo('davidmiguel.sanchez@gmail.com')
            ->setBody(
                $this->renderView(
                    'emails/contact.html.twig',
                    array('name' => $name, 'email' => $email, 'phone' => $phone, 'message' => $note)
                ),
                'text/html');
        $this->get('mailer')->send($message);

        $this->addFlash(
            'notice',
            'Hemos recibido tu mensaje correctamente!'
        );
        return $this->redirectToRoute('homepage');
    }
}
