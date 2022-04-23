package com.edu.guide.security.controller;
import com.edu.guide.model.Jwt;
import com.edu.guide.model.ResponseBody;
import com.edu.guide.model.User;
import com.edu.guide.security.service.UserDetailsImpl;
import com.edu.guide.security.service.UserService;
import com.edu.guide.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/signup")
    public ResponseEntity<?> submitForm(@RequestBody User user) {
        if(userService.findUsername(user.getUsername()) != null) {
            return ResponseEntity.badRequest().body("Username is taken");
        }

        User newUser = new User(user.getUsername(), encoder.encode(user.getPassword()));

        userService.createUser(newUser);
        return ResponseEntity.ok("Registered successfully!");
    }

    @PostMapping("/signin")
    public ResponseEntity<?> loginForm(@RequestBody User user) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwtToken = jwtUtils.generateToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        return ResponseEntity.ok(new Jwt(userDetails.getId(),jwtToken, userDetails.getUsername()));
    }
}
