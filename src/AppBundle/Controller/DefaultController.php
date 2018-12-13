<?php

namespace AppBundle\Controller;
/* sendgrid */
// If you are using Composer
require 'vendor/autoload.php';

// If you are not using Composer (recommended)
// require("path/to/sendgrid-php/sendgrid-php.php");
/* sendgrid */
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

        /*
        $message = \Swift_Message::newInstance()
            ->setSubject('Contact Net&Co Email')
            ->setFrom($email)
            ->setTo('netandconac@gmail.com')
            ->setBody(
                $this->renderView(
                    'emails/contact.html.twig',
                    array('name' => $name, 'email' => $email, 'phone' => $phone, 'message' => $note)
                ),
                'text/html');
        $this->get('mailer')->send($message);
        */
        $from = new SendGrid\Email(null, "test@example.com");
        $subject = "Hello World from the SendGrid PHP Library!";
        $to = new SendGrid\Email(null, "test@example.com");
        $content = new SendGrid\Content("text/plain", "Hello, Email!");
        $mail = new SendGrid\Mail($from, $subject, $to, $content);

        $apiKey = getenv('SENDGRID_API_KEY');
        $sg = new \SendGrid($apiKey);

        $response = $sg->client->mail()->send()->post($mail);
        echo $response->statusCode();
        echo $response->headers();
        echo $response->body();
        $this->addFlash(
            'notice',
            'Hemos recibido tu mensaje correctamente!'
        );
        return $this->redirectToRoute('homepage');
    }
}
