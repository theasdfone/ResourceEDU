package com.edu.guide.controller;
import com.edu.guide.model.User;
import com.edu.guide.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/submitForm")
    @ResponseBody
    public ModelAndView submitForm(String username, String password) {
        int count = 0;
        User input = new User();
        input.setUsername(username);
        input.setPassword(password);
        User u = userService.createUser(input);
        if(u!=null && u.getId()!=null)
            count = 1;

        ModelAndView mav = new ModelAndView();
        if (count == 0)
            mav.addObject("message", "Registration failed");
        else
            mav.addObject("message", "Registration successful");
        mav.setViewName("main");
        return mav;
    }

    @RequestMapping("/loginCheck")
    @ResponseBody
    public ModelAndView loginForm(String username, String password) {
        int count=0;
        User input = new User();
        input.setUsername(username);
        input.setPassword(password);
        boolean result = userService.loginUser(input);
        ModelAndView mav = new ModelAndView();
        if (!result)
            mav.addObject("message", "login failed");
        else
            mav.addObject("message", "login successful");
        mav.setViewName("loginHome");
        return mav;
    }
}
