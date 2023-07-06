package rs.ac.singidunum.comments.controller;

import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.comments.DTO.CommentDTO;
import rs.ac.singidunum.comments.service.ICommentService;

import java.util.List;

@RestController
@RequestMapping("comment")
@CrossOrigin("*")
public class CommentController {

    private final ICommentService commentService;

    public CommentController(ICommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping()
    public CommentDTO create (@RequestBody CommentDTO commentDTO){
       return commentService.createComment(commentDTO);
    }

    @GetMapping("{id}")
    public List<CommentDTO> getApartmentComm (@PathVariable("id") Integer apartmentId){
        return commentService.getAllApartmentsComm(apartmentId);
    }

    @PostMapping("edit")
    public CommentDTO editComment (@RequestBody CommentDTO commentDTO){
        return commentService.createComment(commentDTO);
    }
    @DeleteMapping("{id}")
    void deleteComment (@PathVariable("id") Integer id){
        commentService.delete(id);
    }

}
