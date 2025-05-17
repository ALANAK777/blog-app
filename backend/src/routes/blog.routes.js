const express = require('express');
const router = express.Router();
const Blog = require('../models/blog.model');

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    const query = status ? { status } : {};
    
    const blogs = await Blog.find(query)
      .sort({ updated_at: -1 });
    
    res.json({
      success: true,
      data: blogs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blogs',
      error: error.message
    });
  }
});

// Get blog by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    
    res.json({
      success: true,
      data: blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blog',
      error: error.message
    });
  }
});

// Save draft
router.post('/save-draft', async (req, res) => {
  try {
    const { title, content, tags, id } = req.body;
    
    let blog;
    if (id) {
      // Update existing draft
      blog = await Blog.findById(id);
      if (!blog) {
        return res.status(404).json({
          success: false,
          message: 'Blog not found'
        });
      }
      
      blog.title = title;
      blog.content = content;
      blog.tags = tags;
    } else {
      // Create new draft
      blog = new Blog({
        title,
        content,
        tags,
        status: 'draft'
      });
    }
    
    await blog.save();
    
    res.json({
      success: true,
      data: blog,
      message: id ? 'Draft updated successfully' : 'Draft saved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error saving draft',
      error: error.message
    });
  }
});

// Publish blog
router.post('/publish', async (req, res) => {
  try {
    const { title, content, tags, id } = req.body;
    
    let blog;
    if (id) {
      // Update and publish existing blog
      blog = await Blog.findById(id);
      if (!blog) {
        return res.status(404).json({
          success: false,
          message: 'Blog not found'
        });
      }
      
      blog.title = title;
      blog.content = content;
      blog.tags = tags;
      blog.status = 'published';
    } else {
      // Create and publish new blog
      blog = new Blog({
        title,
        content,
        tags,
        status: 'published'
      });
    }
    
    await blog.save();
    
    res.json({
      success: true,
      data: blog,
      message: 'Blog published successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error publishing blog',
      error: error.message
    });
  }
});

// Delete blog
router.delete('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    
    await Blog.findByIdAndDelete(req.params.id);
    
    res.json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting blog',
      error: error.message
    });
  }
});

module.exports = router; 