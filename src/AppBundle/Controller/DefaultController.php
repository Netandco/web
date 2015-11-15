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

    /*
    * @Route("", name="contactEmail")
    */
    public function sendContactEmailAction(Request $request)
    {

        $message = \Swift_Message::newInstance()
            ->setSubject('Contact Email')
            ->setFrom('send@example.com')
            ->setTo('recipient@example.com')
            ->setBody(
                $this->renderView(
                    // app/Resources/views/emails/contact.html.twig
                    'emails/contact.html.twig',
                    array('name' => $name)
                ),
                'text/html'
            )
        ;
        $this->get('mailer')->send($message);

        return $this->render('default/index.html.twig');
    }
}
